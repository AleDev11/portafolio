import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

const useProjectsList = () => {
    const { data, error, isLoading } = useSWR('/api/projects', fetcher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateIfStale: false,
    });

    return {
        data,
        error,
        isLoading
    }
}

export default useProjectsList;