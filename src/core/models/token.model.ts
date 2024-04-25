import AuthResponse from "./auth.response";

export default interface Token{
    decodedToken: AuthResponse;
    isExpired:boolean;
}