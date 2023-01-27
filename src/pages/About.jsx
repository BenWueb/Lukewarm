import PageHeader from "../components/PageHeader";

function About() {
  return (
    <>
      <PageHeader />
      <div className="about-container">
        <header className="page-header-container">
          <h1>About</h1>
        </header>
        <div className="about-content-container">
          <main className="about-main-container">
            <div className="about-img-container">
              <img
                src="https://scontent.ffcm1-2.fna.fbcdn.net/v/t39.30808-6/318642864_508774097982525_700637169958914987_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a26aad&_nc_ohc=5_NCFEpnW9EAX-xCpLB&_nc_ht=scontent.ffcm1-2.fna&oh=00_AfDc6wljD3Zdbin2YPylSP3AE7i8DgCNXjQ3IAuvgUbkdg&oe=63D34883"
                alt=""
              />
            </div>
            <div className="about-text-container">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat harum ducimus odit ipsam, aut sit. Iure soluta
                voluptates voluptatum aperiam aliquam eligendi pariatur
                doloremque amet velit veniam, eaque provident praesentium
                voluptas dolore fuga animi recusandae! Debitis ratione impedit
                pariatur provident!
              </p>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
                doloremque, neque aliquam cumque ipsam debitis est laudantium
                ducimus optio expedita sit officiis corporis labore esse
                repellat repellendus in animi obcaecati rerum explicabo autem
                officia. Quas sapiente non eos voluptatum! Earum repellendus a
                eius aliquid eaque tempora necessitatibus! Eum facilis autem
                quis, quaerat natus asperiores expedita ullam nisi illo omnis
                repellat? Illum minus dolores odit beatae amet error eos autem
                quas alias nobis voluptatem, quisquam porro molestiae maiores
                consequuntur, rerum explicabo! Explicabo necessitatibus iure
                voluptate et corporis vero quas assumenda possimus error,
                recusandae ipsa libero numquam, maxime eius! Eius, ullam
                commodi.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum, fugiat veniam enim iure qui laboriosam optio rerum
                natus exercitationem adipisci harum distinctio necessitatibus
                dignissimos provident inventore quis unde voluptas! Eius.
              </p>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
export default About;
