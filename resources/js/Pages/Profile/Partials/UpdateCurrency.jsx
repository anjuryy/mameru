import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function UpdateCurrency({ mustVerifyEmail, status, className = '' }) {
    const user = usePage().props.auth.user;
    const { currency } = usePage().props;
    const { currency_lists } = usePage().props;

    // console.log(currency_lists);

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        currency_id: currency[0].currency_id,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update_currency'));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Currency Settings</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Select the currency you want to shop with.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    {/* <InputLabel htmlFor="currency_id" value="C" /> */}

                    <select
                        id="currency_id"
                        className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                        value={data.currency_id}
                        onChange={(e) => setData('currency_id', e.target.value)}
                        required
                        autoComplete="currency_id"
                    >
                        <option>Select a currency...</option>
                        {
                            currency_lists.map(value => (
                                <option key={value.id} value={value.id}> {value.symbol} - {value.code} - {value.name} </option>
                            ))
                        }
                    </select>

                    <InputError className="mt-2" message={errors.currency_id} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                A new verification link has been sent to your email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
