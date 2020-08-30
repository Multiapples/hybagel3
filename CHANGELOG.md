# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.2.4] - 2020-08-30
### Fixed
- Corrected variable name in help.js.

## [0.2.3] - 2020-08-30
### Tidied
- Rewrote code in message_handler.js.
- Partitioned some of message_handler.js off in command_handler.js.
- Renamed client.commandModules to client.commands.

## [0.2.2] - 2020-08-29
### Fixed
- Commands now take arguments in .execute().

## [0.2.1] - 2020-08-29
### Added
- Redundant error checking for doSplitArgs (whether to split the arguments before passing them into the command).
### Fixed
- Redundant error checking now actually works (perhaps we need tests for these tests).
### Tidied
- Extracted bit of code from redundant checking into private function.

## [0.2.0] - 2020-08-29
### Added
- Version command (get the current version of Hybagel).

## [0.1.6] - 2020-08-29
### Added
- Support for commands that don't split the arguments (for example, commands that require a string input that can include spaces).

## [0.1.5] - 2020-08-29
### Added
- Redundant error checking to ensure that each command has every property value.

## [0.1.4] - 2020-08-27
### Tidied
- Moved private functions outside module.exports.

## [0.1.3] - 2020-08-27
### Added
- Argument extraction from commands; though, as of now, no commands utilize arguments.

## [0.1.2] - 2020-08-27
### Tidied
- Added Trailing commas.

## [0.1.1] - 2020-08-27
### Changed
- Hybagel now requires the prefix listed in config.js.

## [0.1.0] - 2020-08-27
### Added
- Ping command (invokes a response from Hybagel).
- Dynamic help command (simply lists all commands as of now).
