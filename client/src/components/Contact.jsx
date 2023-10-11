import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Uncomment the import

export default function Contact({ listing }) {
  Contact.propTypes = {
    listing: PropTypes.object.isRequired,
  };

//   console.log(listing);

  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState('');

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const response = await fetch(`/api/user/${listing.userRef}`);

        if (response.ok) {
          const data = await response.json();
          setLandlord(data);
        } else {
          throw  Error('Failed to fetch landlord data');
        }
      } catch (error) {
        console.error(error);
      }
    };  

    fetchLandlord();
  }, [listing.userRef]);

  return (
    <div>
      {landlord && (
        <div className='flex flex-col gap-2'>
          <p>
            Contact{' '}
            <span className='font-semibold'>{landlord.username}</span> for{' '}
            <span className='font-semibold'>{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name='message'
            id='message'
            rows='2'
            value={message}
            onChange={onChange}
            placeholder='Enter your message here...'
            className='w-full border p-3 rounded-lg'
          ></textarea>

          <Link
            to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}
            className='bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95'
          >
            Send Message
          </Link>
        </div>
      )}
    </div>
  );
}
