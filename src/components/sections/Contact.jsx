import React, { useState, useRef, useEffect } from 'react';
import { Section } from '../ui/Section';
import {
  Mail,
  MapPin,
  Clock as ClockIcon,
  Calendar,
  ArrowRight,
  ExternalLink,
  Sparkles,
  CheckCircle,
} from '../ui/Icons';
import { useLanguage } from '../../context/LanguageContext';

import { FaBehance, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const getSocialIcon = (link) => {
  const raw = `${link?.id ?? ''} ${link?.label ?? ''} ${link?.name ?? ''}`.toLowerCase();
  if (raw.includes('behance')) return FaBehance;
  if (raw.includes('linkedin')) return FaLinkedinIn;
  if (raw.includes('twitter') || raw === 'x' || raw.includes('x ')) return FaXTwitter;
  if (raw.includes('github')) return FaGithub;
  return null;
};

const getSocialLabel = (link) => {
  const label = String(link?.label ?? link?.name ?? '').trim();
  const raw = `${link?.id ?? ''} ${label}`.toLowerCase();
  if (raw.includes('twitter') || raw === 'x' || raw.includes('x ')) return 'X';
  return label;
}

export const Contact = () => {
  const { t } = useLanguage();
  
  // Estados para el desplegable
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  
  // Referencia para detectar clic fuera
  const dropdownRef = useRef(null);

  // Cerrar al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!t || !t.contact) return null;

  return (
    <Section id="contacto" title={t.contact.title} titleCenter={false}>
      <div className="relative">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-40 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,580px)_minmax(0,1fr)] gap-12 lg:gap-20 w-full items-start">

          {/* COLUMNA 1: Formulario */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500/20 to-zinc-800/50 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-zinc-900/80 backdrop-blur-xl p-8 rounded-2xl border border-zinc-800/50 w-full shadow-2xl">
              
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-pink-500" /> 
                {t.contact.form_title}
              </h3>
              
              <p className="text-zinc-400 text-sm mb-8">
                {t.contact.form_subtitle}
              </p>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-400 ml-1 uppercase tracking-wider">{t.contact.form_name}</label>
                    <input type="text" placeholder={t.contact.form_name_placeholder} className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder-zinc-600 hover:border-zinc-700" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-400 ml-1 uppercase tracking-wider">{t.contact.form_email}</label>
                    <input type="email" placeholder={t.contact.form_email_placeholder} className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder-zinc-600 hover:border-zinc-700" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-400 ml-1 uppercase tracking-wider">{t.contact.form_company}</label>
                  <input type="text" placeholder={t.contact.form_company_placeholder} className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder-zinc-600 hover:border-zinc-700" />
                </div>

                {/* DESPLEGABLE PERSONALIZADO CON DETECTOR DE CLIC FUERA */}
                <div className="space-y-1.5 relative" ref={dropdownRef}>
                  <label className="text-xs font-semibold text-zinc-400 ml-1 uppercase tracking-wider">{t.contact.form_type_label}</label>
                  
                  <div 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3.5 text-sm text-white flex justify-between items-center cursor-pointer hover:border-zinc-700 transition-all"
                  >
                    <span className={selectedType ? "text-white" : "text-zinc-600"}>
                      {selectedType || t.contact.form_type_select}
                    </span>
                    <svg className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>

                  {isDropdownOpen && (
                    <div className="absolute z-50 mt-2 w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in duration-200">
                      <div className="flex flex-wrap gap-2">
                        {t.contact.form_type_options?.map((option, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => {
                              setSelectedType(option);
                              setIsDropdownOpen(false);
                            }}
                            className={`px-4 py-2 rounded-full text-[11px] font-medium transition-all duration-300 border ${selectedType === option ? 'bg-blue-500/20 border-blue-500 text-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.2)]' : 'bg-zinc-950/50 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white'}`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-400 ml-1 uppercase tracking-wider">{t.contact.form_details}</label>
                  <textarea rows="4" placeholder={t.contact.form_details_placeholder} className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder-zinc-600 hover:border-zinc-700 resize-none" />
                </div>

                <button className="w-full relative group overflow-hidden rounded-xl bg-white p-[1px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#3B82F6_50%,#E2E8F0_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 text-sm font-bold text-white backdrop-blur-3xl transition-all group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500">
                    {t.contact.form_submit}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* COLUMNA 2: Info (Original) */}
          <div className="space-y-10 lg:pt-4">
            <div className="grid gap-6">
              {[
                { icon: ClockIcon, title: t.contact.benefit_1_title, text: t.contact.benefit_1_text },
                { icon: Calendar, title: t.contact.benefit_2_title, text: t.contact.benefit_2_text },
                { icon: ArrowRight, title: t.contact.benefit_3_title, text: t.contact.benefit_3_text }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-5 p-4 rounded-2xl transition-colors hover:bg-zinc-900/40 group">
                  <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 text-blue-500 group-hover:scale-110 group-hover:border-blue-500/30 group-hover:text-blue-400 transition-all duration-300 shadow-lg shadow-black/20">
                    <div className="absolute inset-0 bg-blue-500/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <item.icon className="w-5 h-5 relative z-10" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg group-hover:text-blue-100 transition-colors">{item.title}</h4>
                    <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent w-full" />

            <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="mt-1 p-2 rounded-lg bg-zinc-900/50 border border-zinc-800/50 group-hover:border-blue-500/30 transition-colors">
                    <MapPin className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{t.contact.info_location_title}</h4>
                    <p className="text-zinc-400 text-sm">{t.contact.info_location_text}</p>
                    <p className="text-zinc-600 text-xs mt-0.5">{t.contact.info_location_sub}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="mt-1 p-2 rounded-lg bg-zinc-900/50 border border-zinc-800/50 group-hover:border-blue-500/30 transition-colors">
                    <Mail className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{t.contact.info_email_title}</h4>
                    <a href="mailto:jr.eugercios@gmail.com" className="text-zinc-400 hover:text-blue-400 hover:underline text-sm block transition-colors">jr.eugercios@gmail.com</a>
                    <p className="text-zinc-600 text-xs mt-0.5">{t.contact.info_email_sub}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="mt-1 p-2 rounded-lg bg-zinc-900/50 border border-zinc-800/50 group-hover:border-blue-500/30 transition-colors">
                    <ClockIcon className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{t.contact.info_hours_title}</h4>
                    <p className="text-zinc-400 text-sm">{t.contact.info_hours_text}</p>
                    <p className="text-zinc-600 text-xs mt-0.5">{t.contact.info_hours_sub}</p>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* SECTION: LINKS SOCIALES (Compacto) */}
        <div className="mt-20">
          <div className="relative rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-500/5 blur-3xl rounded-full pointer-events-none" />
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 relative z-10">
              <div>
                <h4 className="text-white font-bold text-xl">{t.contact.social_title}</h4>
                <p className="text-zinc-500 text-sm mt-1">{t.contact.social_subtitle}</p>
              </div>
              <div className="h-px flex-1 bg-zinc-800 mx-6 hidden md:block self-center opacity-50" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
              {t.contact.links?.map((link) => {
                const Icon = getSocialIcon(link);
                const label = getSocialLabel(link);
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between p-4 rounded-xl bg-zinc-900/30 border border-zinc-800 hover:border-blue-500/50 hover:bg-zinc-900 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-zinc-400 group-hover:text-blue-500 transition-colors">
                        {Icon ? <Icon className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
                      </div>
                      <div>
                        <span className="text-zinc-200 font-medium text-sm block group-hover:text-white transition-colors">{label}</span>
                        <span className="text-zinc-600 text-[10px] block transition-colors">{link.description}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-zinc-700 group-hover:text-blue-500 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <footer className="py-10 text-center text-zinc-600 text-xs relative z-20 mt-12 border-t border-zinc-900/50">
          <span className="opacity-70">&copy; {new Date().getFullYear()} JREdesign. {t.contact.copyright}</span>
        </footer>
      </div>
    </Section>
  );
};