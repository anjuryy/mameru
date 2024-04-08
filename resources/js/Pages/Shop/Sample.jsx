import { usePage } from "@inertiajs/react"

export default function Sample()
{
    const { categories } = usePage().props

    console.log(categories);
    return(
        <div>

        </div>
    )
}