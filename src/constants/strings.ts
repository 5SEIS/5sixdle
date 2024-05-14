export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!
export const GAME_URL = process.env.REACT_APP_GAME_URL!

export const WIN_MESSAGES = ['Good Job!', 'Great!', 'Correct!']
export const GAME_COPIED_MESSAGE = 'Copied to clipboard'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'You haven\'t completed enough letters'
export const WORD_NOT_FOUND_MESSAGE = 'Word not found'
export const HARD_MODE_ALERT_MESSAGE =
    'Hard mode can only be selected at the start'
export const HARD_MODE_DESCRIPTION =
    'All revealed hits must be used in the next attempt'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'To improve contrast'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
    `The word was ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
    `You have to use the letter ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
    `This attempt must use the letter ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = 'Stats'
export const GUESS_DISTRIBUTION_TEXT = 'Match distribution' //TODO review this constant
export const NEW_WORD_TEXT = 'New word in'
export const SHARE_TEXT = 'Share'
export const TOTAL_TRIES_TEXT = 'Total tries'
export const SUCCESS_RATE_TEXT = 'Success rate'
export const CURRENT_STREAK_TEXT = 'Current streak'
export const BEST_STREAK_TEXT = 'Best streak'
export const NEXT_PAGINATION_TEXT = 'Next'
export const PREVIOUS_PAGINATION_TEXT = 'Previous'
