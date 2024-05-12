export default interface AuthResponse {
    exp: number;
    iat: number;
    iss: string;
    jti: string;
    nbf: number;
    prv: string;
    role: string;
    sub: string;
    isExpired: boolean;
}
