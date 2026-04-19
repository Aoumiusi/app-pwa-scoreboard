# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Progressive Web App (PWA) scoreboard application for sports like volleyball and table tennis. It's a single-page application built with vanilla HTML, CSS, and JavaScript.

## File Structure

- `index.html` - Main application file containing all HTML, CSS, and JavaScript
- `manifest.json` - PWA manifest for app installation and metadata
- `service-worker.js` - Service worker for offline functionality and caching
- Icon files (`icon-*.png`, `icon-svg.svg`) - App icons for different contexts

## Development Commands

This is a static web application with no build process. To develop:

1. **Local Development**: Open `index.html` directly in a browser or serve with any static file server
2. **Testing PWA Features**: Use a local HTTP server (e.g., `python -m http.server 8000` or `npx serve .`)
3. **No Build/Lint Commands**: This project uses vanilla JavaScript with no build tools or linters

## Application Architecture

### Core Game State Management
- Single `gameState` object manages all application state (scores, sets, timer)
- State includes: team scores, set scores, current set index, timer state
- No external state management library - uses vanilla JavaScript

### User Interface Patterns
- **Touch/Swipe Controls**: Primary interaction method for mobile
  - Vertical swipes on score displays to increment/decrement scores
  - Double-tap to award sets to teams
- **PC Controls**: Mouse and keyboard support for desktop users
  - Mouse wheel on score displays to increment/decrement scores
  - Double-click to award sets to teams
  - Click buttons for precise score control
- **Keyboard Shortcuts**: Full keyboard control with specific key bindings
- **Responsive Design**: Mobile-first design with enhanced PC usability

### PWA Implementation
- Service worker handles caching and offline functionality
- Manifest provides app metadata for installation
- Install prompt handling for "Add to Home Screen" functionality

### Key Game Logic
- **Set-based Scoring**: Configurable number of sets (1-5)
- **Win Conditions**: 25 points with 2-point minimum difference, max 30 points
- **Timer Functionality**: Start/pause/reset timer for match timing
- **Visual Feedback**: Color-coded set winners, current set highlighting

### Event Handling Patterns
- Touch events for mobile interaction (touchstart, touchmove, touchend)
- Mouse events for PC interaction (wheel, click, dblclick, hover)
- Keyboard events for desktop shortcuts
- DOM manipulation for real-time UI updates
- Data attributes for button action mapping

## Key Functions and Components

- **Score Management**: `incrementScore()`, `decrementScore()`, `updateScoreDisplay()`
- **Set Management**: `awardSet()`, `startNewSet()`, `updateSetsDisplay()`
- **Game Flow**: `checkWinCondition()`, `showGameResult()`, `resetScores()`
- **Timer**: `startTimer()`, `pauseTimer()`, `resetTimer()`, `updateTimer()`
- **UI Updates**: `highlightCurrentSet()`, `updateSetsVisibility()`

## Customization Points

- **Point Settings**: `pointSettings` object defines win conditions
- **Team Names**: Editable via contenteditable elements
- **Set Count**: Configurable via dropdown (1-5 sets)
- **Keyboard Shortcuts**: Defined in keydown event listener

## PWA Features

- Offline capability through service worker caching
- Installable on mobile devices and desktop
- App-like experience when installed
- Touch-optimized interface