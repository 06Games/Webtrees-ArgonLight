<?php
/************************************************
 * Argon Light Theme
 * Originally made by jchue
 * Under the Internet Systems Consortium License
 * https://github.com/jchue/argon-webtrees-theme
 *
 * Forked and maintained by Evan Galli
 * Under the same licence
 * https://github.com/06Games/Webtrees-ArgonLight
 ***********************************************/

declare(strict_types=1);

namespace EvanG\Themes\Argon;

use Fisharebest\Webtrees\Module\AbstractModule;
use Fisharebest\Webtrees\Module\ModuleCustomInterface;
use Fisharebest\Webtrees\Module\ModuleCustomTrait;
use Fisharebest\Webtrees\Module\ModuleThemeInterface;
use Fisharebest\Webtrees\Module\ModuleThemeTrait;
use Fisharebest\Webtrees\View;

class ArgonLightTheme extends AbstractModule implements ModuleCustomInterface, ModuleThemeInterface
{
    use ModuleCustomTrait, ModuleThemeTrait;

    public function title(): string { return 'Argon Light'; }

    public function description(): string { return 'A light theme for Webtrees based on Argon Design System'; }

    public function customModuleAuthorName(): string { return 'EvanG'; }

    public function customModuleVersion(): string
    {
        return '1.1.7';
    }

    public function customModuleLatestVersionUrl(): string { return 'https://github.com/06Games/Webtrees-ArgonLight/raw/main/version.txt'; }

    public function customModuleSupportUrl(): string { return 'https://github.com/06Games/Webtrees-ArgonLight/issues'; }

    public function stylesheets(): array
    {
        return [
            $this->assetUrl('css/imports.css'),
            $this->assetUrl('css/theme.css'),
            $this->assetUrl('css/magicsunday.css'),
            $this->assetUrl('css/gustine-sosa.css')
        ];
    }

    public function parameter($parameter_name)
    {
        $parameters = [
            'chart-background-f' => 'fff4f9',
            'chart-background-m' => 'f4fdff',
            'chart-background-u' => 'f4f5f7',
            'chart-box-x' => 260,
            'chart-box-y' => 85,
            'chart-font-color' => '000000',
            'chart-spacing-x' => 5,
            'chart-spacing-y' => 10,
            'compact-chart-box-x' => 240,
            'compact-chart-box-y' => 50,
            'distribution-chart-high-values' => '84beff',
            'distribution-chart-low-values' => 'c3dfff',
            'distribution-chart-no-values' => 'ffffff',
        ];

        return $parameters[$parameter_name];
    }

    public function boot(): void
    {
        // Register a namespace for our views.
        View::registerNamespace($this->name(), $this->resourcesFolder() . 'views/');

        /** Argon views **/

        // Site Footer
        View::registerCustomView('::modules/powered-by-webtrees/footer', $this->name() . '::modules/powered-by-webtrees/footer'); // Remove text-center class
        View::registerCustomView('::modules/contact-links/footer', $this->name() . '::modules/contact-links/footer'); // Remove text-center and padding classes
        View::registerCustomView('::modules/hit-counter/footer', $this->name() . '::modules/hit-counter/footer'); // Remove text-center and padding classes
        View::registerCustomView('::modules/privacy-policy/footer', $this->name() . '::modules/privacy-policy/footer'); // Remove text-center and padding classes

        // Tree Page Blocks
        View::registerCustomView('::modules/block-template', $this->name() . '::modules/block-template'); // Remove card classes from block
        View::registerCustomView('::modules/todo/research-tasks', $this->name() . '::modules/todo/research-tasks'); // Make table normal
        View::registerCustomView('::modules/recent_changes/changes-list', $this->name() . '::modules/recent_changes/changes-list'); // Restructure changes list

        // Individual Page
        View::registerCustomView('::modules/stories/tab', $this->name() . '::modules/stories/tab'); // Add container for story
        View::registerCustomView('::modules/lightbox/tab', $this->name() . '::modules/lightbox/tab'); // Add Bootstrap grid classes for proper sizing, reduce maximum number of items per row to four by increasing column width
        View::registerCustomView('::modules/descendancy/sidebar', $this->name() . '::modules/descendancy/sidebar'); // Add Bootstrap form classes

        // Charts
        View::registerCustomView('::modules/lifespans-chart/chart', $this->name() . '::modules/lifespans-chart/chart'); // Adjust vertical positioning and set background based on gender class

        // FAQ Page
        View::registerCustomView('::modules/faq/show', $this->name() . '::modules/faq/show'); // Adjust TOC and back-to-top anchor

        // Lists
        View::registerCustomView('::modules/place-hierarchy/list', $this->name() . '::modules/place-hierarchy/list'); // Make list header a heading


        /** My views **/
        
        View::registerCustomView('::lists/individuals-table', $this->name() . '::lists/individuals-table');
        View::registerCustomView('::lists/families-table', $this->name() . '::lists/families-table');
        View::registerCustomView('::individual-page-menu', $this->name() . '::individual-page-menu');
    }

    public function resourcesFolder(): string { return __DIR__ . '/resources/'; }
}
