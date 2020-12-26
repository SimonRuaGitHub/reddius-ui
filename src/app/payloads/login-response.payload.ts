export interface LoginResponse{
    authenticationToken: string;
    username: string;
    refreshToken: string;
    expiresAt: number;
    userid: number;
}