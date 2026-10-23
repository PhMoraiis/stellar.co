import type { getCalApi } from "@calcom/embed-react";

declare global {
	interface Window {
		fbq?: (...args: unknown[]) => void;
	}
}

type MetaStandardEvent = "Contact" | "Lead";
type CalApi = Awaited<ReturnType<typeof getCalApi>>;

export function trackMetaEvent(event: MetaStandardEvent) {
	// fbq não existe se o pixel for bloqueado (ex.: adblock)
	window.fbq?.("track", event);
}

// Os componentes compartilham a mesma instância do Cal (namespace '30min'),
// então o listener é registrado uma única vez para não duplicar o Lead
let calBookingListenerRegistered = false;

export function trackCalBookingAsLead(cal: CalApi) {
	if (calBookingListenerRegistered) return;
	calBookingListenerRegistered = true;

	cal("on", {
		action: "bookingSuccessfulV2",
		callback: () => trackMetaEvent("Lead"),
	});
}
