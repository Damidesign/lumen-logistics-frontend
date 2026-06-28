import type { Page, Route } from "@playwright/test";
import shipmentsFixture from "../fixtures/shipments.json";
import settlementsFixture from "../fixtures/settlements.json";
import ledgerFixture from "../fixtures/ledger.json";
import authFixture from "../fixtures/auth.json";

type JsonValue = Record<string, unknown> | unknown[];

async function respondJson(
  route: Route,
  body: JsonValue,
  status = 200,
): Promise<void> {
  await route.fulfill({
    status,
    contentType: "application/json",
    body: JSON.stringify(body),
  });
}

/** Intercepts all /api/shipments requests with fixture data */
export async function mockShipments(page: Page): Promise<void> {
  // Must register most-specific routes first (Playwright uses LIFO — last registered fires first)
  await page.route("**/api/shipments/ship-001", async (route) => {
    await respondJson(route, shipmentsFixture.single);
  });

  await page.route("**/api/shipments", async (route) => {
    if (route.request().method() === "POST") {
      await respondJson(route, shipmentsFixture.created, 201);
      return;
    }
    const url = new URL(route.request().url());
    const status = url.searchParams.get("status");
    if (status) {
      const filtered = {
        ...shipmentsFixture.list,
        data: shipmentsFixture.list.data.filter((s) => s.status === status),
      };
      await respondJson(route, filtered);
    } else {
      await respondJson(route, shipmentsFixture.list);
    }
  });
}

/** Intercepts all /api/settlements requests with fixture data */
export async function mockSettlements(page: Page): Promise<void> {
  // Register specific routes first (Playwright LIFO — last registered fires first)
  await page.route("**/api/settlements/stl-001", async (route) => {
    await respondJson(route, settlementsFixture.single);
  });

  await page.route("**/api/settlements", async (route) => {
    await respondJson(route, settlementsFixture.list);
  });
}

/** Intercepts /api/ledger/blocks requests with fixture data */
export async function mockLedger(page: Page): Promise<void> {
  await page.route("**/api/ledger/blocks*", async (route) => {
    const url = new URL(route.request().url());
    const cursor = url.searchParams.get("cursor");
    if (cursor === "cursor-page-2") {
      await respondJson(route, ledgerFixture.page2);
    } else {
      await respondJson(route, ledgerFixture.page1);
    }
  });
}

/** Intercepts /api/auth/* requests */
export async function mockAuth(page: Page): Promise<void> {
  await page.route("**/api/auth/login", async (route) => {
    const body = JSON.parse(route.request().postData() ?? "{}") as {
      email?: string;
    };
    if (body.email === "admin@navin.com") {
      await respondJson(route, authFixture.loginSuccess);
    } else {
      await respondJson(route, authFixture.loginError, 401);
    }
  });

  await page.route("**/api/auth/logout", async (route) => {
    await respondJson(route, { data: {} });
  });

  await page.route("**/api/auth/refresh", async (route) => {
    await respondJson(route, {
      data: { token: authFixture.loginSuccess.data.token },
    });
  });
}

/** Blocks Sentry and SSE/realtime requests to avoid noise in tests */
export async function blockTelemetry(page: Page): Promise<void> {
  await page.route("**sentry.io/**", (route) => route.abort());
  await page.route("**ingest.sentry.io/**", (route) => route.abort());
  // Block the SSE realtime endpoint so RealtimeManager doesn't spam retries
  await page.route("**/api/events", (route) => route.abort());
  // Block token refresh endpoint (tests use non-expiring tokens)
  await page.route("**/api/auth/refresh", (route) =>
    route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ data: {} }) })
  );
}
