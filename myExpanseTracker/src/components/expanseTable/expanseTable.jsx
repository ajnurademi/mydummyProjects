function expanseTable() {

    return (
        <>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Name
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Date
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Amount
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Mydonalds
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            202020
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            $12
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-white hover:text-gray-200 rounded-lg bg-red-600 hover:bg-red-700 px-3 py-1">
                                X
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>

    )
}

export default expanseTable