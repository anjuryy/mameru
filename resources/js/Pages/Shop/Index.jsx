
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, usePage } from '@inertiajs/react'
import ProductList from './ProductList'
import ShopNavLink from './ShopNavLink'

export default function Index({ auth }) {
    const { category } = usePage().props
    const { products } = usePage().props
    const { purchases } = usePage().props

    const [open, setOpen] = useState(false)
    const [openCart, setOpenCart] = useState(false)

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Shop" />

            <ShopNavLink category={ category } products={ products } purchases={ purchases }/>

            <ProductList productLists={ products }/>

        </AuthenticatedLayout>

    )
}
