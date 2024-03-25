import Box from '@/Components/Box';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, usePage } from '@inertiajs/react';
import { Divider } from 'antd';
import React, { useState } from 'react';

const Checkout = ({ auth }) => {

const { purchases } = usePage().props
const { user_currency_setting } = usePage().props

// const totalPrices = purchases.map(item => item.products.price * item.quantity);
// const totalPrice = totalPrices.reduce((acc, curr) => parseInt(acc) + parseInt(curr), 0).toLocaleString();

const totalPrices = purchases.map(item => (item.products.price / parseInt(user_currency_setting[0]['currency_converters'].value)) * item.quantity);
const totalPrice = totalPrices.reduce((acc, curr) => parseInt(acc) + parseInt(curr), 0).toLocaleString();

const submit = (e) => {
    e.preventDefault()

}

const [selectedOption, setSelectedOption] = useState('');

return (
    <AuthenticatedLayout
        user={ auth.user }
    >
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                        <div className="col-span-2">
                            <Box>
                                <form onSubmit={ submit }>
                                    <div className="text-gray-500">
                                        Contact Information
                                    </div>
                                    <div className="p-2">
                                        <InputLabel value="Email Address"></InputLabel>

                                        <TextInput
                                            className="w-full mt-2"
                                            type="email"
                                        />

                                        <InputError message={''} className="mt-2" />
                                    </div>

                                    <Divider />

                                    <div className="text-gray-500 pb-4">
                                        Shipping Information
                                    </div>

                                    <div className="grid grid-cols-2 gap-2">
                                        <div>
                                            <InputLabel value="First Name"></InputLabel>

                                            <TextInput
                                                className="w-full mt-2"
                                            />

                                        </div>

                                        <div>
                                            <InputLabel value="Last Name"></InputLabel>

                                            <TextInput
                                                className="w-full mt-2"
                                            />
                                        </div>
                                    </div>

                                    <InputLabel value="Address" className="mt-4"></InputLabel>

                                    <TextInput
                                        className="w-full mt-2"
                                        type="text"
                                    />

                                    <InputError message={''} className="mt-2" />

                                    <InputLabel value="Apartment, suite, etc." className="mt-4"></InputLabel>

                                    <TextInput
                                        className="w-full mt-2"
                                        type="text"
                                    />

                                    <InputError message={''} className="mt-2" />

                                    <div className="grid grid-cols-2 gap-2 mt-2">
                                        <div>
                                            <InputLabel value="City"></InputLabel>

                                            <TextInput
                                                className="w-full mt-2"
                                            />

                                        </div>

                                        <div>
                                            <InputLabel value="Country"></InputLabel>

                                            <select
                                                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full mt-2"
                                                type="text"
                                            >
                                                <option value="">Philippines</option>
                                                <option value="">United States</option>
                                                <option value="">Japan</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2 mt-2">
                                        <div>
                                            <InputLabel value="State / Province"></InputLabel>

                                            <TextInput
                                                className="w-full mt-2"
                                            />

                                        </div>

                                        <div>
                                            <InputLabel value="Postal code"></InputLabel>

                                            <TextInput
                                                className="w-full mt-2"
                                            />
                                        </div>
                                    </div>

                                    <InputLabel value="Phone Number" className="mt-4"></InputLabel>

                                    <TextInput
                                        className="w-full mt-2"
                                        type="text"
                                    />

                                    <InputError message={''} className="mt-2" />

                                    <Divider />

                                    <div className="text-gray-500 pb-4">
                                        Payment Information
                                    </div>

                                    <div className="flex space-x-4">
                                        <InputLabel className="inline-flex items-center">
                                        <TextInput
                                            type="radio"
                                            className="form-radio"
                                            name="option"
                                            value="option1"
                                            checked={selectedOption === 'option1'}
                                            onChange={() => setSelectedOption('option1')}
                                        />
                                        <span className="ml-2">Credit Card</span>
                                        </InputLabel>
                                        <InputLabel className="inline-flex items-center">
                                        <TextInput
                                            type="radio"
                                            className="form-radio"
                                            name="option"
                                            value="option2"
                                            checked={selectedOption === 'option2'}
                                            onChange={() => setSelectedOption('option2')}
                                        />
                                        <span className="ml-2">Cash On Delivery (COD)</span>
                                        </InputLabel>
                                    </div>

                                    {selectedOption === 'option1' && (
                                        <div>
                                            <div className="mt-4">
                                                <InputLabel className="block" value="Card Number" />

                                                <TextInput
                                                    type="text"
                                                    className="form-input mt-1 block w-full"
                                                />
                                            </div>

                                            <div className="mt-4">
                                                <InputLabel className="block" value="Name on a card" />

                                                <TextInput
                                                    type="text"
                                                    className="form-input mt-1 block w-full"
                                                />
                                            </div>

                                            <div className="grid grid-cols-3 gap-3">
                                                <div className='col-span-2'>
                                                    <div className="mt-4">
                                                        <InputLabel className="block" value="Expiration date (MM/YY)" />

                                                        <TextInput
                                                            type="text"
                                                            className="form-input mt-1 block w-full"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-span-1">
                                                    <div className="mt-4">
                                                        <InputLabel className="block" value="CVC" />

                                                        <TextInput
                                                            type="text"
                                                            className="form-input mt-1 block w-full"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                </form>
                            </Box>
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <Box>
                                <div className="text-gray-500">
                                    Shopping Cart
                                </div>
                                <Divider></Divider>
                                <ul role="list" className="-my-6 divide-y divide-gray-200 pt-2">
                                    {
                                        purchases.map(product => (
                                            <li key={ product.id } className="flex py-6">
                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                <img
                                                    src={"../images/"+ product.products.images[0].filename}
                                                    // alt={product.imageAlt}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                                </div>
                                                <div className="ml-4 flex flex-1 flex-col">
                                                    <div>
                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                        <h3>
                                                            <Link
                                                                href={route('purchase.index')}
                                                            >
                                                                { product.products.name }
                                                            </Link>
                                                        </h3>
                                                        <p className="ml-4">{ user_currency_setting[0]['currency_converters'].symbol }{Math.floor(parseInt((product.products.price).toLocaleString()) / parseInt(user_currency_setting[0]['currency_converters'].value))}</p>
                                                        </div>
                                                        <p className="mt-1 text-sm text-gray-500">{ product.products.description }</p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <Divider></Divider>
                                <div className="flex justify-between items-center">
                                    <div className="text-base font-medium text-gray-900 bold">
                                        Total:
                                    </div>
                                    <div className="text-base font-medium text-gray-900">
                                    { user_currency_setting[0]['currency_converters'].symbol }{ totalPrice }
                                    </div>
                                </div>
                                <Divider></Divider>
                                <div className="mt-4 w-full">
                                    <Link>
                                        <PrimaryButton className="flex justify-center w-full">
                                            CHECKOUT
                                        </PrimaryButton>
                                    </Link>
                                </div>
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
  );
};

export default Checkout;
