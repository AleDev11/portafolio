import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

const useProject = (projectId?: number) => {
    const { data, error, isLoading, mutate } = useSWR(projectId ? `/api/projects/${projectId}` : null, fetcher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateIfStale: false,
    });

    return {
        data,
        error,
        isLoading,
        mutate
    }
}

export default useProject;