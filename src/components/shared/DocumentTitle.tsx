import { useEffect } from 'react';
import { useMatches } from 'react-router-dom';

type RouteHandle = {
  title?: string;
};

export default function DocumentTitle() {
  const matches = useMatches();

  useEffect(() => {
    const current = matches[matches.length - 1];

    const handle = current?.handle as RouteHandle | undefined;

    document.title = handle?.title ? `${handle.title} | Purls Massage Fitness Beauty` : 'Purls Massage Fitness Beauty';
  }, [matches]);

  return null;
}
