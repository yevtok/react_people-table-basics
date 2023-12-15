import { Link } from 'react-router-dom';
import cn from 'classnames';
import { Person, Sex } from '../../types';

type Props = {
  person: Person;
};

export const PersonLink: React.FC<Props> = ({ person }) => {
  return (
    <Link
      className={cn({ 'has-text-danger': person.sex === Sex.female })}
      to={`../${person.slug}`}
    >
      {person.name}
    </Link>
  );
};