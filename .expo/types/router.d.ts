/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/Context/UserLocationContext` | `/Navigations/TabNavigation` | `/Screen/FavoriteScreen/FavoriteScreen` | `/Screen/HomeScreen/AppMapView` | `/Screen/HomeScreen/Header` | `/Screen/HomeScreen/HomeScreen` | `/Screen/HomeScreen/SearchBar` | `/Screen/LoginScreen/LoginScreen` | `/Screen/ProfileScreen/ProfileScreen` | `/_sitemap`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
