import styles from "./page.module.css";
import Image from "next/image";
import ButtonLink from "../components/layout-components/UI-UX elements/ButtonLink";

const About = ({}) => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutTop}>
        {" "}
        <h1>ABOUT US</h1>
        <Image
          width={1920}
          height={1080}
          className={styles.img1}
          src="/dog-with-people-chewy-unsplash.jpg"
          alt=""
          priority={true}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABsAKoDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAQIDAAQFBv/EABoQAQEBAQEBAQAAAAAAAAAAAAABAhESAxP/xAAXAQEBAQEAAAAAAAAAAAAAAAABAAID/8QAGBEBAQEBAQAAAAAAAAAAAAAAABEBAhL/2gAMAwEAAhEDEQA/APpgZmmApaNLQQpaNLaCFBrS2giAdbqJmJ0epHbpPQ+kD9YnpupGYvW6QIB1upCwdDqTt6HS9bpA2lta0tqLWlta0lrJa0trWktFI2h6JdFuhSp6b0jdh7VS/tvbn9t7NDo9j6c/sfZC/ofSE2M0gt6bqXofRSnW6TrdSdvW6XodKNaW1ultBa0lo2ltZ0ltJqjqp6rG60GtJ3TaqWtCk12S7T1pLW2fSi9+jfo5b9C/o1nQjtn0NPo4p9Dz6NZrLsmzzbkztTOmg6Zo00hNHlIV63U+j1J6HW6DEsFZgi0tNS1nWk9J6V0lqMaUdI7q+4huM60huob0tuOf6Ry6pT1ul90NJ1nFq2dq525crYd+NY11Z0tnTmwtl1xh0ZqkqOVIUpK3SwUnpszNAGFgS0th+BYyUrE9RewmoIXNqI7y6tZS1kQ1x7yhvDt1lHWGfJrh1hO4dusJ35rxgrmmFM5U8GmG85jO62ItmFzlXMagNlSFzDyEDBaQeJPTYWIBuCyIcDh+BwElhLFbC2CFHWUtZdFhNRRObWUtYdWsp6yonJrBLh1XJLkxOfw0wv5byQnMnmTTJpEAkNIMhpEg43DcbiT0RAUyzMKLALIgWwwVElhLFKSpJahNRXSdSSsLYpSVInA4cCA4MjDEhkFoKTMLJP/Z"
        />
      </div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h4>GOOD MOOD FOOD</h4>
          <p>
            We know that a healthy mind is just as important as a healthy body.
            But should that thinking be limited to humans?
          </p>
          <p>
            We've created an enhanced series of natural meals, treats and
            supplements that does good and tastes good, to give your pet the
            optimal ingredients needed to boost their mood and behaviour, paw in
            paw with their physical health.
          </p>
          <p>
            And by delivering our knowledge in the clearest way possible, we
            give you the peace of mind you need to better support them.
          </p>
        </div>
        <ButtonLink text="EXPLORE OUR PRODUCTS" href="/products"></ButtonLink>
      </div>
    </div>
  );
};

export default About;
