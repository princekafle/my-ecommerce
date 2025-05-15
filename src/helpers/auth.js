import { ROLE_ADMIN, ROLE_MERCHANT } from "@/src/constants/roles.js";

export function allowedAdminRoles(roles) {
  return roles?.some((role) => [ROLE_ADMIN, ROLE_MERCHANT].includes(role));
  // logged in user ko roles admin ra merchant ho vane true haina vane false return garxa 
}
