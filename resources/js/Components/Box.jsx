export default function Box({ children})
{
    return (
        <div className="border border-gray-200 dark:border-gray-800 rounded-md p-4 shadow-sm dark:text-gray-300 mb-4">
            <div className="text-gray-500 font-medium mb-1">
                <slot name="header" />
            </div>
        { children }
        </div>
    )
}
