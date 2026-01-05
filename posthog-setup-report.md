# PostHog post-wizard report

The wizard has completed a deep integration of your DevEvent Next.js project. PostHog analytics has been integrated using the recommended `instrumentation-client.ts` approach for Next.js 16.1.1, which provides automatic pageview and pageleave tracking, error capture, and custom event tracking. A reverse proxy has been configured to route analytics requests through your application, improving reliability and reducing tracking blocker interference.

## Integration Summary

The following files were created or modified:

| File | Change Type | Description |
|------|-------------|-------------|
| `.env` | Created | Environment variables for PostHog API key and host |
| `instrumentation-client.ts` | Created | PostHog client-side initialization with error tracking |
| `next.config.ts` | Modified | Added reverse proxy rewrites for PostHog ingestion |
| `components/ExploreBtn.tsx` | Modified | Added `explore_events_clicked` event tracking |
| `components/EventCard.tsx` | Modified | Added `event_card_clicked` event tracking with properties |
| `components/Navbar.tsx` | Modified | Added navigation click event tracking |

## Events Instrumented

| Event Name | Description | File |
|------------|-------------|------|
| `explore_events_clicked` | User clicked the Explore Events button on the homepage | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicked on an event card to view event details | `components/EventCard.tsx` |
| `nav_home_clicked` | User clicked Home in the navigation bar | `components/Navbar.tsx` |
| `nav_events_clicked` | User clicked Events in the navigation bar | `components/Navbar.tsx` |
| `nav_create_event_clicked` | User clicked Create Event in the navigation bar | `components/Navbar.tsx` |
| `logo_clicked` | User clicked the DevEvent logo | `components/Navbar.tsx` |

## Event Properties

### `event_card_clicked`
- `event_title`: Title of the clicked event
- `event_slug`: URL slug of the event
- `event_location`: Location of the event
- `event_date`: Date of the event
- `event_time`: Time of the event

### `explore_events_clicked`
- `button_location`: Location of the button (homepage_hero)

### Navigation events
- `nav_item`: Name of the navigation item clicked
- `nav_location`: Location of the navigation (header)

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

### Dashboard
- [Analytics basics](https://us.posthog.com/project/278604/dashboard/972463) - Main dashboard with all insights

### Insights
- [Event Card Clicks Over Time](https://us.posthog.com/project/278604/insights/q7AowxFn) - Tracks when users click on event cards
- [Explore Events Funnel](https://us.posthog.com/project/278604/insights/npKnL35I) - Conversion funnel from explore button to event card clicks
- [Navigation Clicks Distribution](https://us.posthog.com/project/278604/insights/qn6AGoHW) - Distribution of clicks across navigation items
- [User Engagement by Event Location](https://us.posthog.com/project/278604/insights/t9jPup5G) - Event card clicks broken down by event location
- [Daily Active Users](https://us.posthog.com/project/278604/insights/N9qkPIvq) - Unique users interacting with your application daily

## Additional Features Enabled

- **Automatic Pageview Tracking**: PostHog will automatically capture `$pageview` events on navigation
- **Error Tracking**: Unhandled exceptions are automatically captured via `capture_exceptions: true`
- **Session Replay**: Available for deeper user behavior analysis (can be enabled in PostHog settings)
- **Debug Mode**: Enabled in development environment for easier troubleshooting
