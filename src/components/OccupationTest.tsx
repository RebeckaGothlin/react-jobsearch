import { Occupation } from '../types/Occupations';
import { occ } from '../../occ';

const OccupationTest = () => {
  return (
    <div>
      {concepts.map((concept) => (
        <div key={concept.id}>
          <h2>
            {concept.preferred_label} (ID: {concept.id})
          </h2>
          {concept.narrower.length > 0 && (
            <div>
              <h3>Narrower Concepts:</h3>
              {concept.narrower.map((narrower) => (
                <div key={narrower.id}>
                  <h4>
                    {narrower.preferred_label} (ID: {narrower.id})
                  </h4>
                  {narrower.broader.length > 0 && (
                    <div>
                      <h5>Broader Concepts:</h5>
                      {narrower.broader.map((broader) => (
                        <div key={broader.id}>
                          <span>
                            {broader.preferred_label} (ID: {broader.id})
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default OccupationTest;
