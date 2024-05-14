import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
    isOpen: boolean
    handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
    return (
        <BaseModal
            title="How to play?"
            isOpen={isOpen}
            handleClose={handleClose}
        >
            <p className="text-sm text-gray-500 dark:text-gray-300">
                You have 6 tries to guess the 5SEIS word of the day.
                After each guess, the color of the letters will change to show how close you are to the correct word.
            </p>

            <div className="flex justify-center mt-4 mb-1">
                <Cell
                    isRevealing={true}
                    isCompleted={true}
                    value="A"
                    status="correct"
                />
                <Cell value="U" />
                <Cell value="D" />
                <Cell value="I" />
                <Cell value="O" />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300">
                A is in the correct spot.
            </p>

            <div className="flex justify-center mt-4 mb-1">
                <Cell value="I" />
                <Cell value="D" />
                <Cell value="A" />
                <Cell
                    isRevealing={true}
                    isCompleted={true}
                    value="E"
                    status="present"
                />
                <Cell value="S" />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300">
                E is in the word but in the wrong spot.
            </p>

            <div className="flex justify-center mt-4 mb-1">
                <Cell
                    isRevealing={true}
                    isCompleted={true}
                    value="B"
                    status="absent" />
                <Cell value="I" />
                <Cell value="D" />
                <Cell value="E" />
                <Cell value="O" />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300">
                B is not in the word in any spot.
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-300">
                The word changes at 00:00 GMT-3.
            </p>

            <p className="mt-6 text-xs italic text-gray-500 dark:text-gray-300">
                This is a fork of Criptdle, an open source version of the word guessing game we all know and love
                - <a
                    href="https://github.com/5SEIS/5sixdle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline outline-0 outline-none"
                >
                    check the code here!
                </a>{' '}
            </p>
        </BaseModal>
    )
}
