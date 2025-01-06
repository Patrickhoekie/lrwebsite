import { useForm, ValidationError } from '@formspree/react'

export function ContactForm() {
  const [state, handleSubmit] = useForm("xwppwqgo");

  if (state.succeeded) {
    return (
      <div className="bg-gray-50 p-8 rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Bedankt voor uw bericht!</h2>
        <p className="text-gray-600">We nemen zo spoedig mogelijk contact met u op.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-10 space-y-6 bg-gray-50 p-8 rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6">Laat een bericht achter</h2>
      <p className="text-gray-600 mb-8">Wij nemen zo snel mogelijk contact met u op</p>

      <div>
        <label className="block text-sm font-medium mb-2">
          Waar kunnen we u mee helpen? <span className="text-red-500">*</span>
        </label>
        <select
          name="contactType"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
        >
          <option value="">Selecteer contacttype</option>
          <option value="vraag">Algemene vraag</option>
          <option value="offerte">Offerte aanvraag</option>
          <option value="samenwerking">Samenwerking</option>
        </select>
        <ValidationError prefix="Contact Type" field="contactType" errors={state.errors} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Welk pakket heeft uw interesse? <span className="text-red-500">*</span>
        </label>
        <select
          name="package"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
        >
          <option value="">Selecteer een pakket</option>
          <option value="basis">Basis</option>
          <option value="geavanceerd">Geavanceerd</option>
          <option value="pro">Pro</option>
        </select>
        <ValidationError prefix="Package" field="package" errors={state.errors} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Naam <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          required
          placeholder="Uw naam"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          E-mail <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="uw@email.nl"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Telefoonnummer <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          required
          placeholder="Uw telefoonnummer"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Bericht <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Uw bericht"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
      >
        {state.submitting ? 'Bezig met versturen...' : 'Verstuur Bericht'}
      </button>
    </form>
  )
} 