import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getActiveFeatureNames } from '@paralleldrive/feature-toggles';
import { FeatureToggles } from '@paralleldrive/react-feature-toggles';

const useQuery = (handler) => {
  const { query } = useRouter();

  useEffect(() => {
    handler(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
};

const withFeatures = ({ initialFeatures = [] } = {}) => (Component) => {
  return function WithFeatures(props) {
    const [features, setFeatures] = useState([]);

    useQuery((query) => {
      const newFeatures = [
        ...getActiveFeatureNames(initialFeatures),
        ...(query.ft ? query.ft.split(',') : []),
      ];
      console.log(`features: ${newFeatures}`);
      setFeatures(newFeatures);
    });

    return (
      <FeatureToggles features={features}>
        <Component {...props} />
      </FeatureToggles>
    );
  };
};

export default withFeatures;
