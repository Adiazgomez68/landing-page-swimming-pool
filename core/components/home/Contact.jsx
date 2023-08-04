import Button from "../shared/Button";
import { ArrowRight } from "../shared/icons/Arrows";

const Contact = () => {
  return (
    <section id="contact" className="relative top-48">
      <form
        onSubmit
        className="flex justify-center w-full px-5 my-8"
      >
        <fieldset className="flex flex-col justify-center w-full max-w-screen-sm space-y-4">
          <div className="space-y-4 md:space-x-3 md:space-y-0 md:items-center md:flex">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
            />
            <input
              type="email"
              name="mail"
              placeholder="Correo electrónico"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Asunto"
          />
          <textarea
            className="border bg-[#F9F9F9] border-[#BBBBBB] rounded-md p-3 focus:outline-0"
            placeholder="Escríbenos tu mensaje"
            type="text"
            name="message"
            required
            cols=""
            rows="5"
          ></textarea>

          <Button
            className="relative w-full p-2 duration-300 rounded-md text-primary hover:bg-hoverColorSecondary group sm:w-52 md:right-0 bg-secondary"
            type="submit"
            title={"Enviar mensaje"}
            classLink="w-full flex justify-end"
          >
            <ArrowRight className="duration-300 group-hover:translate-x-3" />
          </Button>
        </fieldset>
      </form>
    </section>
  )
}

export default Contact;