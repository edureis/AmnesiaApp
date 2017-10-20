import { Injectable } from '@angular/core';
import { Platform }   from 'ionic-angular';
import { Network }    from '@ionic-native/network';

export enum PlatformType {
    Mobile,
    Browser
};

@Injectable()
export class PlatformService {

    public platformType = PlatformType;
    private platformName: string;

    constructor(
        private platform: Platform, 
        private network: Network
    ) {
        if (platform.platforms().length == 3)
            this.platformName = platform.platforms()[2]
        else
            this.platformName = platform.platforms()[0];
    };

    public get name(): string {
        return this.platformName;
    };

    public get type(): PlatformType {
        switch (this.name) {
            case 'core':
                return PlatformType.Browser;
            case 'mobileweb':
                return PlatformType.Browser;
            default:
                return PlatformType.Mobile;
        };
    };

    ready(): Promise<string> {
        return this.platform.ready();
    }

    is(plataform_name: string): boolean {
        return this.platform.is(plataform_name);
    }

    hasConnection(): boolean {
        // types: unknown, ethernet, wifi, 2g, 3g, 4g, cellular, none
        if (this.is('cordova')) {
            if (this.network.type in ['unknown', 'none'])
                return false
            else
                return true;
        } else
            return true;
    }

}
