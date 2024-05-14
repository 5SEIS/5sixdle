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
                You have 6 attempts to discover the 5SEIS word of the day.
                After each attempt, the color of the letters will change so you can see how close you are to the solution.
            </p>

            <div className="flex justify-center mt-4 mb-1">
                <Cell
                    isRevealing={true}
                    isCompleted={true}
                    value="E"
                    status="correct"
                />
                <Cell value="V" />
                <Cell value="E" />
                <Cell value="N" />
                <Cell value="T" />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300">
                The letter E is in the correct place.
            </p>

            <div className="flex justify-center mt-4 mb-1">
                <Cell value="B" />
                <Cell value="R" />
                <Cell
                    isRevealing={true}
                    isCompleted={true}
                    value="A"
                    status="present"
                />
                <Cell value="N" />
                <Cell value="D" />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300">
                The letter A is present in the word but in the wrong place.
            </p>

            <div className="flex justify-center mt-4 mb-1">
                <Cell value="A" />
                <Cell value="V" />
                <Cell value="A" />
                <Cell value="N" />
                <Cell
                    isRevealing={true}
                    isCompleted={true}
                    value="T"
                    status="absent"
                />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300">
                The letter T is nowhere to be found in the word.
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
