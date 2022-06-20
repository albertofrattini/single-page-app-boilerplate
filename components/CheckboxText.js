export default function CheckboxText() {
    return (
        <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
                <input
                    id="remember"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required=""
                />
            </div>
            <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                I agree with the{' '}
                <a
                    href="#"
                    className="text-blue-600 hover:underline dark:text-blue-500">
                    terms and conditions
                </a>
                .
            </label>
        </div>
    )
}
