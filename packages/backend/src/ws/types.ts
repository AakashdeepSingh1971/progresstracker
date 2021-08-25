export interface MessagePayload {
    op: string;
    data: any;
    ref?: string
}



export interface UserToken {
    id: number;
    userId: string;
    jti: string;
    revoked: boolean;
    revokedAt: Date;
    issuedAt: Date;
}