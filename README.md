**[Argon Light Theme](https://github.com/06Games/Webtrees-ArgonLight)** is a fork of [Argon Theme for webtrees](https://github.com/jchue/argon-webtrees-theme) by jchue  
It adds a modern light theme to [Webtrees](https://github.com/fisharebest/webtrees) based on [Argon Design System](https://github.com/creativetimofficial/argon-design-system) by [Creative Tim](https://github.com/creativetimofficial)

This module is brought to you by [Evan Galli](https://github.com/06Games) under the [ISC License](https://choosealicense.com/licenses/isc/)

## Screenshots
|               Home               |                  Statistics                  |
|:--------------------------------:|:--------------------------------------------:|
| ![Home](.github/assets/home.png) | ![Statistics](.github/assets/statistics.png) |

|                  Individual                  |               Event                |
|:--------------------------------------------:|:----------------------------------:|
| ![Individual](.github/assets/individual.png) | ![Event](.github/assets/event.png) |

|                     Interactive tree                     | [Magicsunday's Pedigree chart](https://github.com/magicsunday/webtrees-pedigree-chart) |
|:--------------------------------------------------------:|:--------------------------------------------------------------------------------------:|
| ![Interactive tree](.github/assets/interactive-tree.png) |       ![Magicsunday's Pedigree chart ](.github/assets/magicsunday-pedigree.png)        |

## Installation

### Latest release (Recommended)

1. Download the first zip file from the [latest release](https://github.com/06Games/Webtrees-ArgonLight/releases/latest) (look under the "Assets" section).
2. Unzip the file.
3. Move the folder into your `webtrees/modules_v4` directory.

### Development version

1. Download the repository as [a zip file](https://github.com/06Games/Webtrees-ArgonLight/archive/refs/heads/main.zip).
2. Unzip the file.
3. Rename the resulting folder to `evang-argonlight`.
4. Move the folder into your `webtrees/modules_v4` directory.

## Development

1. Make sure you have both [composer](https://getcomposer.org/) and [npm](https://www.npmjs.com/) installed on your system.
2. Install the dependencies by running the following commands in the module's root directory:
    ```shell
    composer install
    npm install
    ```
3. To build the module, run one of the following commands:
    ```shell
    npm run dev    # For development
    npm run build  # For production
    ```
4. You can now copy the repo folder to your `webtrees/modules_v4` directory to test it out.