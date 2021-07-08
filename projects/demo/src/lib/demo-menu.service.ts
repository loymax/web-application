import { Injectable } from '@angular/core';
import { LmxModulesHelperService } from '@loymax/app';

@Injectable({
  providedIn: 'root'
})
export class LmxMenuService {
    /** Путь до раздела */
    link = 'demo';

    constructor(
        private modulesHelperService: LmxModulesHelperService,
    ) { }

    /**
     * Инициализация компонента
     */
    init() {
        this.modulesHelperService.menu$.next(this.getMenu());
        this.modulesHelperService.locales.push({ prefix: '/assets/locale/demo/src/lib/assets/locale/', suffix: '.yml', });
    }

    /** Пункт в меню */
    private getMenu() {
        return {
            title: 'Демо модуль',
            link: '/demo',
        };
    }
}
