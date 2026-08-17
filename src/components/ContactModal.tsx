"use client";
import React, { useState, useEffect } from 'react';
import { useForm } from '@formspree/react';
import { countries } from '../utils/countries';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({ 
    firstName: '', 
    lastName: '', 
    email: '', 
    countryCode: '+58', 
    phone: '', 
    subject: '', 
    message: '' 
  });
  
  const [errors, setErrors] = useState({ 
    firstName: '', 
    lastName: '', 
    email: '', 
    phone: '', 
    subject: '', 
    message: '' 
  });
  
  const [state, handleSubmit] = useForm('meajrdgp');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Cierra el modal automáticamente 3 segundos después de éxito
  useEffect(() => {
    if (state.succeeded) {
      setFormData({ firstName: '', lastName: '', email: '', countryCode: '+58', phone: '', subject: '', message: '' });
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, onClose]);

  const validate = () => {
    const tempErrors = { firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' };
    let isValid = true;

    if (!formData.firstName.trim()) { tempErrors.firstName = 'Requerido'; isValid = false; }
    if (!formData.lastName.trim()) { tempErrors.lastName = 'Requerido'; isValid = false; }
    
    if (!formData.email.trim()) { 
      tempErrors.email = 'Requerido'; isValid = false; 
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Inválido'; isValid = false;
    }
    
    if (formData.phone.trim() && !/^\d+$/.test(formData.phone.replace(/\s/g, ''))) {
      tempErrors.phone = 'Solo números'; isValid = false;
    }

    if (!formData.subject.trim()) { tempErrors.subject = 'Requerido'; isValid = false; }
    if (!formData.message.trim()) { tempErrors.message = 'Requerido'; isValid = false; }

    setErrors(tempErrors);
    return isValid;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      await handleSubmit(e);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Si es teléfono, solo permitir números EXACTOS (sin espacios) según estándar internacional E.164
    if (name === 'phone' && value !== '' && !/^[0-9]*$/.test(value)) {
      return;
    }

    // Si es nombre o apellido, solo permitir letras (incluyendo acentos) SIN ESPACIOS ni caracteres especiales
    if ((name === 'firstName' || name === 'lastName') && value !== '' && !/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]*$/.test(value)) {
      return;
    }
    
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  if (!isOpen) return null;

  // Clases comunes para el efecto de label flotante
  const inputContainerClass = "relative bg-bg-blanco rounded-xl border transition-all";
  const inputClass = "peer w-full bg-transparent px-4 py-4 focus:outline-none placeholder-transparent";
  const labelClass = "absolute left-4 transition-all pointer-events-none font-medium peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-bg-blanco peer-focus:px-1 peer-focus:text-texto-oscuro";
  const getLabelDynamicClass = (value: string) => 
    value.length > 0 
      ? "-top-2 text-xs bg-bg-blanco px-1 text-texto-claro" 
      : "top-4 text-base text-texto-claro/40 bg-transparent";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-texto-oscuro/70 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      
      <div className="relative w-full max-w-xl bg-bg-blanco rounded-3xl shadow-2xl p-6 md:p-8 transform transition-all animate-in zoom-in-95 duration-200">
        
        <button onClick={onClose} className="cursor-pointer absolute top-5 right-5 text-texto-claro hover:text-texto-oscuro hover:scale-110 transition-all bg-bg-gris rounded-full p-2" aria-label="Cerrar modal">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <h3 className="text-3xl font-extrabold text-texto-oscuro mb-1 tracking-tight">Ponte en contacto</h3>
        <p className="text-texto-claro/90 mb-8 text-sm font-medium">Completa el formulario y te responderé lo antes posible.</p>

        {state.succeeded ? (
          <div className="bg-green-50 text-green-700 p-8 rounded-2xl flex flex-col items-center justify-center gap-4 border border-green-200 text-center h-64 animate-in fade-in zoom-in duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <div>
              <p className="font-bold text-xl mb-1">¡Mensaje enviado!</p>
              <p className="opacity-80">Me pondré en contacto contigo en breve.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className={`${inputContainerClass} ${errors.firstName ? 'border-red-500 ring-1 ring-red-500' : 'border-bg-gris focus-within:border-texto-oscuro focus-within:ring-1 focus-within:ring-texto-oscuro'}`}>
                <input type="text" id="firstName" name="firstName" maxLength={40} value={formData.firstName} onChange={handleChange} className={inputClass} placeholder="Nombre" />
                <label htmlFor="firstName" className={`${labelClass} ${getLabelDynamicClass(formData.firstName)} ${errors.firstName ? 'text-red-500 peer-focus:text-red-500' : ''}`}>Nombre</label>
                {errors.firstName && <span className="absolute -bottom-5 right-1 text-[10px] text-red-500 font-bold">{errors.firstName}</span>}
              </div>

              <div className={`${inputContainerClass} ${errors.lastName ? 'border-red-500 ring-1 ring-red-500' : 'border-bg-gris focus-within:border-texto-oscuro focus-within:ring-1 focus-within:ring-texto-oscuro'}`}>
                <input type="text" id="lastName" name="lastName" maxLength={40} value={formData.lastName} onChange={handleChange} className={inputClass} placeholder="Apellido" />
                <label htmlFor="lastName" className={`${labelClass} ${getLabelDynamicClass(formData.lastName)} ${errors.lastName ? 'text-red-500 peer-focus:text-red-500' : ''}`}>Apellido</label>
                {errors.lastName && <span className="absolute -bottom-5 right-1 text-[10px] text-red-500 font-bold">{errors.lastName}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`${inputContainerClass} ${errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-bg-gris focus-within:border-texto-oscuro focus-within:ring-1 focus-within:ring-texto-oscuro'}`}>
                <input type="email" id="email" name="email" maxLength={100} value={formData.email} onChange={handleChange} className={inputClass} placeholder="Email" />
                <label htmlFor="email" className={`${labelClass} ${getLabelDynamicClass(formData.email)} ${errors.email ? 'text-red-500 peer-focus:text-red-500' : ''}`}>Email</label>
                {errors.email && <span className="absolute -bottom-5 right-1 text-[10px] text-red-500 font-bold">{errors.email}</span>}
              </div>

              <div className={`flex rounded-xl border bg-bg-blanco transition-all ${errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-bg-gris focus-within:border-texto-oscuro focus-within:ring-1 focus-within:ring-texto-oscuro'}`}>
                <div className="relative border-r border-bg-gris w-28 shrink-0">
                  <select name="countryCode" value={formData.countryCode} onChange={handleChange} className="w-full h-full bg-transparent px-2 py-4 text-sm font-medium focus:outline-none appearance-none cursor-pointer">
                    {countries.map(c => (
                      <option key={`${c.flag}-${c.code}`} value={c.code}>{c.flag} {c.code}</option>
                    ))}
                  </select>
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
                <div className="relative w-full">
                  <input type="tel" id="phone" name="phone" maxLength={14} value={formData.phone} onChange={handleChange} className={inputClass} placeholder="Teléfono" />
                  <label htmlFor="phone" className={`${labelClass} ${getLabelDynamicClass(formData.phone)} ${errors.phone ? 'text-red-500 peer-focus:text-red-500' : ''}`}>Teléfono</label>
                  {errors.phone && <span className="absolute -bottom-5 right-1 text-[10px] text-red-500 font-bold">{errors.phone}</span>}
                </div>
              </div>
            </div>

            <div className={`${inputContainerClass} ${errors.subject ? 'border-red-500 ring-1 ring-red-500' : 'border-bg-gris focus-within:border-texto-oscuro focus-within:ring-1 focus-within:ring-texto-oscuro'}`}>
              <input type="text" id="subject" name="subject" maxLength={100} value={formData.subject} onChange={handleChange} className={inputClass} placeholder="Asunto" />
              <label htmlFor="subject" className={`${labelClass} ${getLabelDynamicClass(formData.subject)} ${errors.subject ? 'text-red-500 peer-focus:text-red-500' : ''}`}>Asunto</label>
              {errors.subject && <span className="absolute -bottom-5 right-1 text-[10px] text-red-500 font-bold">{errors.subject}</span>}
            </div>

            <div className={`${inputContainerClass} ${errors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-bg-gris focus-within:border-texto-oscuro focus-within:ring-1 focus-within:ring-texto-oscuro'}`}>
              <textarea id="message" name="message" rows={4} maxLength={500} value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Mensaje"></textarea>
              <label htmlFor="message" className={`${labelClass} ${getLabelDynamicClass(formData.message)} ${errors.message ? 'text-red-500 peer-focus:text-red-500' : ''}`}>Mensaje</label>
              <div className="absolute -bottom-5 right-1 flex gap-2">
                {errors.message && <span className="text-[10px] text-red-500 font-bold">{errors.message}</span>}
                <span className={`text-[10px] font-medium ${500 - formData.message.length <= 50 ? 'text-orange-500' : 'text-texto-claro/60'}`}>
                  {500 - formData.message.length} restantes
                </span>
              </div>
            </div>

            <button type="submit" disabled={state.submitting} className={`w-full py-4 bg-texto-oscuro text-bg-blanco font-extrabold text-lg rounded-xl hover:bg-texto-claro transition-all shadow-lg flex items-center justify-center gap-2 mt-4 ${state.submitting ? 'opacity-70 cursor-wait' : 'hover:scale-[1.02]'}`}>
              {state.submitting ? (
                <><svg className="animate-spin h-5 w-5 text-bg-blanco" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Enviando...</>
              ) : 'Enviar mensaje'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
