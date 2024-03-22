export default function Box({ children, className= '' })
{
    return (
        <div className={`border border-gray-200 rounded-md p-4 shadow-sm mb-4 ` + className}>
            <div className="text-gray-500 font-medium mb-1">
                <slot name="header" />
            </div>
        { children }
        </div>
    )
}
