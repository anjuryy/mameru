import Box from "@/Components/Box";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

export default function Show({ auth })
{
    const { product_detail } = usePage().props
    const { category } = usePage().props
    const { products } = usePage().props
    
    console.log(product_detail);
    return (
        <AuthenticatedLayout
            user={ auth.user }
        >
            <ShopNavLink category={ category } products={ products } />
            
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-4">
                            <Box className="md:col-span-7 flex items-center">
                                <div className="grid grid-cols-2 gap-1">
                                    {
                                        product_detail.images.map(e => (
                                            <img
                                                className="w-60 h-60"
                                                key={ e.id }
                                                src={"../images/" + e.filename}
                                            />
                                        ))
                                    }
                                </div>

                            </Box>
                            {/* <EmptyState v-else class="md:col-span-7 flex items-center">No images</EmptyState> */}
                            <div className="md:col-span-1 flex flex-col gap-4">
                                <Box>
                                    Product info
                                    
                                    <div className="text-2xl font-bold">
                                        ₱ { product_detail.price }
                                    </div>
                                    <div className="text-lg pt-2">
                                        { product_detail.name }
                                    </div>
                                    <div className="text-gray-500">
                                        { product_detail.description }
                                    </div>

                                    <div className="pt-4">
                                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                            Stock: { product_detail.quantity }
                                        </span>
                                    </div>
                                    {/* <Price :price="listing.price" class="text-2xl font-bold" />
                                    <ListingSpace :listing="listing" class="text-lg" />
                                    <ListingAddress :listing="listing" class="text-gray-500" /> */}
                                </Box>

                                <Box>
                                    Monthly Payment
                                    {/* <div>
                                        <label class="label">Interest Rate ({{ interestRate }}%)</label>
                                        <input v-model.number="interestRate" type="range" min="0.1" max="30" step="0.1" class="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />

                                        <label class="label">Duration ({{ duration }})</label>
                                        <input v-model.number="duration" type="range" min="3" max="35" step="1" class="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />

                                        <div class="text-gray-600 dark:text-gray-300 mt-2">
                                            <div class="text-gray-400">
                                                Your monthly payment
                                            </div>
                                            <Price :price="monthlyPayment" class="text-3xl"/>
                                        </div>

                                        <div class="mt-2 text-gray-500">
                                            <div class="flex justify-between">
                                            <div>Total paid</div>
                                            <div>
                                                <Price :price="totalPaid" class="font-medium" />
                                            </div>
                                            </div>
                                            <div class="flex justify-between">
                                            <div>Principal paid</div>
                                            <div>
                                                <Price :price="listing.price" class="font-medium" />
                                            </div>
                                            </div>
                                            <div class="flex justify-between">
                                            <div>Interest paid</div>
                                            <div>
                                                <Price :price="totalInterest" class="font-medium" />
                                            </div>
                                            </div>
                                        </div>

                                    </div> */}
                                </Box>

                                {/* <MakeOffer
                                    v-if="user && !offerMade"
                                    @offer-updated="offer = $event"
                                    :listing-id="listing.id"
                                    :price="listing.price"
                                />
                                <OfferMade
                                    v-if="user && offerMade"
                                    :offer="offerMade"
                                /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}