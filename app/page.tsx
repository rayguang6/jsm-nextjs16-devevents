import React from 'react'
import ExploreBtn from '@/components/ExploreBtn'
import EventCard from '@/components/EventCard'

const page = () => {
  const events = [
    {image: '/images/event1.png', title: 'Event 1', slug: 'event-1', location: 'Location 1', date: '2026-01-01', time: '10:00' },
    {image: '/images/event2.png', title: 'Event 2', slug: 'event-2', location: 'Location 2', date: '2026-01-02', time: '10:00' },
    {image: '/images/event3.png', title: 'Event 3', slug: 'event-3', location: 'Location 3', date: '2026-01-03', time: '10:00' },
    {image: '/images/event4.png', title: 'Event 4', slug: 'event-4', location: 'Location 4', date: '2026-01-04', time: '10:00' },
    {image: '/images/event5.png', title: 'Event 5', slug: 'event-5', location: 'Location 5', date: '2026-01-05', time: '10:00' },
  ];

  return (
    <section>
        <h1 className="text-center">The Hub for Every Dev <br /> Event You Can't Miss</h1>
        <p className="text-center mt-5">Hackathons, Meetups, and Conferences, All in One Place</p>

        <ExploreBtn />

        <div className="mt-20 space-y-7">
                <h3>Featured Events</h3>

            <ul className="events">
                {/* {events && events.length > 0 && events.map((event: IEvent) => (
                    <li key={event.title} className="list-none">
                        <EventCard {...event} />
                    </li>
                ))} */}
                <ul className='events'>
                  {events.map((event) => (
                    <li key={event.title} className='list-none'>
                      <EventCard {...event} />  
                    </li>
                  ))}
                </ul>
            </ul>
        </div>
    </section>
  );
};

export default page;