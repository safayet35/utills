

const FunCode = () => {
  return (
      <div className="mt-16 p-6 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl max-w-2xl mx-auto">
                            <div className="flex items-start justify-between">
                                <div className="text-left flex-1">
                                    <p className="text-sm text-gray-500 dark:text-gray-500 font-mono mb-2">
                                        Error Details
                                    </p>
                                    <code className="text-sm font-mono text-gray-700 dark:text-gray-300">
                                        <span className="text-rose-600 dark:text-rose-400">
                                            Error:
                                        </span>{" "}
                                        ROUTE_NOT_FOUND
                                    </code>
                                    <br />
                                    <code className="text-sm font-mono text-gray-700 dark:text-gray-300">
                                        <span className="text-rose-600 dark:text-rose-400">
                                            Status:
                                        </span>{" "}
                                        404
                                    </code>
                                    <br />
                                    <code className="text-sm font-mono text-gray-700 dark:text-gray-300">
                                        <span className="text-rose-600 dark:text-rose-400">
                                            Message:
                                        </span>{" "}
                                        "Page does not exist"
                                    </code>
                                </div>
                            </div>
                        </div>
  )
}

export default FunCode