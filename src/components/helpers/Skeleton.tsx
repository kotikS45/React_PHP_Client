export const Skeleton = () => {
    return (
        <div className="flex w-full max-w-[315px] animate-pulse flex-col rounded-lg border border-gray-200 bg-white shadow lg:max-w-full">
            <div className="h-64 w-full rounded-t-lg bg-gray-200"></div>
            <div className="flex flex-grow flex-col p-5">
                <div className="mb-2 h-8 w-1/2 rounded-xl bg-gray-200"></div>
                <div className="mb-3 min-h-28 w-full flex-grow rounded-xl bg-gray-200"></div>
                <div className="h-12 w-full rounded-xl bg-gray-200"></div>
            </div>
        </div>
    );
};