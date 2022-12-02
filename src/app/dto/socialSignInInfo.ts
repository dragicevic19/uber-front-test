export class SocialSignInInfoDTO {
    firstName: string;
    lastName: string;
    email: string;
    picture: string;

    constructor(decodedJwt?: DecodedGoogleJwt, facebookInfo?: FacebookInfo) {
        
        if (decodedJwt) {
            this.firstName = decodedJwt.given_name;
            this.lastName = decodedJwt.family_name;
            this.email = decodedJwt.email;
            this.picture = decodedJwt.picture;
        }
        else if (facebookInfo) {
            this.firstName = facebookInfo.firstName;
            this.lastName = facebookInfo.lastName;
            this.email = facebookInfo.email;
            this.picture = facebookInfo.photoUrl;
        }
        else {
            this.firstName = '';
            this.lastName = '';
            this.email = '';
            this.picture = '';
        }
    }
}

export interface DecodedGoogleJwt {
    email: string;
    family_name: string;
    given_name: string;
    name: string;
    picture: string;
}

export interface FacebookInfo {
    email: string;
    firstName: string;
    lastName: string;
    photoUrl: string;
}