import { Events } from './events';

type TDevToolsMessageEvent<TType extends string, TPayload = null> = MessageEvent<{
  type: TType;
  payload: TPayload;
}>;

export namespace Payload {
  export type ParentRouteChanged = {
    appCode: string;
    route: string;
  };

  export type RouteNotConfigured = {
    route: string;
  };
}

export type DevToolsMessageEvent =
  | TDevToolsMessageEvent<Events.Widget.Loaded>
  | TDevToolsMessageEvent<Events.TaskViewer.ParentRouteChanged, Payload.ParentRouteChanged>
  | TDevToolsMessageEvent<Events.TaskViewer.RouteNotConfigured, Payload.RouteNotConfigured>;
