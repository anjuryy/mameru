
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, usePage } from '@inertiajs/react'
import ProductList from './ProductList'
import ShopNavLink from './ShopNavLink'
import { useEffect } from 'react'

export default function Index({ auth }) {
    const { category } = usePage().props
    const { products } = usePage().props
    const { purchases } = usePage().props
    const { user_currency_setting } = usePage().props

    // console.log(user_currency_setting);
    const [open, setOpen] = useState(false)
    const [openCart, setOpenCart] = useState(false)

    const [allTodolist, setAllcountry] = useState([])
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        const getusers = async() => {
            const getres = await fetch("https://anjurypatawaran.online/api/product/searchBar")
            const setusers = await getres.json();
            // console.log(setusers)
            setAllcountry(await setusers.results)
        }
        getusers()
    }, []);

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Shop" />

            <ShopNavLink category={ category } products={ products } purchases={ purchases } userCurrencySetting={ user_currency_setting } setFilteredData={ setFilteredData }/>

            <ProductList productLists={ products } userCurrencySetting={ user_currency_setting } filteredData={ filteredData }/>

        </AuthenticatedLayout>

    )
}
