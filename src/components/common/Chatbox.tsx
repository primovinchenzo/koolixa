'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './Chatbox.module.css';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

export default function Chatbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  // Ticketing Form States
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [ticketEmail, setTicketEmail] = useState('');
  const [ticketMessage, setTicketMessage] = useState('');
  const [ticketStatus, setTicketStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [ticketError, setTicketError] = useState('');

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize with greeting
  useEffect(() => {
    setMessages([
      {
        id: 'welcome',
        sender: 'bot',
        text: 'System online. I am the KOOLIXA Web Operations Assistant. How can I help you with custom Next.js website design, security firewalls, or uptime maintenance today?',
        timestamp: new Date(),
      },
    ]);
  }, []);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, showTicketForm]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Math.random().toString(),
      sender: 'user',
      text: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking and reply
    setTimeout(() => {
      setIsTyping(false);
      const replyText = getBotResponse(userMessage.text);
      
      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          sender: 'bot',
          text: replyText,
          timestamp: new Date(),
        },
      ]);
    }, 1000);
  };

  const getBotResponse = (query: string): string => {
    const text = query.toLowerCase();
    
    if (text.includes('uptime') || text.includes('status') || text.includes('online') || text.includes('down') || text.includes('hosting')) {
      return 'KOOLIXA manages high-availability web hosting. Average system uptime across our client websites stands at 99.99%. Custom rollbacks and backup replicates are monitored 24/7.';
    }
    
    if (text.includes('sla') || text.includes('response') || text.includes('time') || text.includes('speed') || text.includes('edit') || text.includes('update')) {
      return 'We guarantee a support response SLA of under 14 minutes for all site maintenance clients. Our engineers handle content adjustments, DNS edits, and layout changes.';
    }

    if (text.includes('price') || text.includes('cost') || text.includes('quote') || text.includes('proposal') || text.includes('build') || text.includes('design')) {
      return 'KOOLIXA scopes website projects based on size and database features, and ongoing maintenance retainers. You can submit an inline ticket here to receive a proposal draft forwarded to vinnybusiness13@gmail.com.';
    }

    if (text.includes('incident') || text.includes('attack') || text.includes('hack') || text.includes('security') || text.includes('spam')) {
      return 'We secure websites using Web Application Firewalls (WAF) and SSL encryption rules. For security audits or incident checks, please click "Open Support Ticket" below.';
    }

    // Default trigger to suggest opening a ticket
    return 'For custom site builds, speed optimization reviews, or ticket logs, please click "Open Support Ticket". This forwards details directly to vinnybusiness13@gmail.com.';
  };

  const handleTicketSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTicketError('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!ticketEmail.trim() || !emailRegex.test(ticketEmail)) {
      setTicketError('Please enter a valid business email.');
      return;
    }

    if (!ticketMessage.trim() || ticketMessage.length < 5) {
      setTicketError('Please enter a brief description of your request.');
      return;
    }

    setTicketStatus('loading');

    try {
      // POST ticket details to our route handler, appending the forwarding destination
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: ticketEmail.trim(),
          message: `[AI CHAT SUPPORT TICKET FORWARD TO vinnybusiness13@gmail.com] ${ticketMessage.trim()}`,
        }),
      });

      const data = await res.json() as { success: boolean };

      if (res.ok && data.success) {
        setTicketStatus('success');
        setMessages((prev) => [
          ...prev,
          {
            id: Math.random().toString(),
            sender: 'bot',
            text: `Web operations ticket generated. A confirmation copy has been sent to ${ticketEmail} and our engineering lead at vinnybusiness13@gmail.com. Expected response: <14 minutes.`,
            timestamp: new Date(),
          },
        ]);
        // Reset ticket inputs
        setTicketEmail('');
        setTicketMessage('');
        setTimeout(() => setShowTicketForm(false), 2000);
      } else {
        setTicketStatus('error');
        setTicketError('Submission failed. Please try again.');
      }
    } catch (err) {
      console.error('Ticket submit error:', err);
      setTicketStatus('error');
      setTicketError('Network error. Failed to forward ticket.');
    }
  };

  return (
    <div className={styles.widgetContainer}>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.toggleBtn}
        aria-label="Toggle AI Support Assistant"
        title="Open Support Chat"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={styles.chatWindow} role="dialog" aria-label="Web Support AI Console">
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.botProfile}>
              <span className={styles.pulseDot}></span>
              <div>
                <h4>KOOLIXA AI Assistant</h4>
                <p>Web Operations Desk</p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className={styles.messagesBox}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`${styles.msgRow} ${msg.sender === 'user' ? styles.userRow : styles.botRow}`}
              >
                <div className={styles.bubble}>{msg.text}</div>
              </div>
            ))}
            
            {/* Thinking indicator */}
            {isTyping && (
              <div className={`${styles.msgRow} ${styles.botRow}`}>
                <div className={`${styles.bubble} ${styles.typingBubble}`}>
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}

            {/* Inline Ticket Intake Form */}
            {showTicketForm && (
              <div className={styles.ticketFormBox}>
                <h5>Open Priority Web Ticket</h5>
                <form onSubmit={handleTicketSubmit} className={styles.ticketForm}>
                  {ticketError && <span className={styles.formError}>{ticketError}</span>}
                  
                  <input
                    type="email"
                    placeholder="Business Email"
                    value={ticketEmail}
                    onChange={(e) => setTicketEmail(e.target.value)}
                    required
                    disabled={ticketStatus === 'loading'}
                    className={styles.ticketInput}
                  />
                  
                  <textarea
                    placeholder="Describe your site requirements or issue..."
                    value={ticketMessage}
                    onChange={(e) => setTicketMessage(e.target.value)}
                    required
                    rows={2}
                    disabled={ticketStatus === 'loading'}
                    className={styles.ticketTextarea}
                  />
                  
                  <div className={styles.formActions}>
                    <button
                      type="button"
                      onClick={() => setShowTicketForm(false)}
                      className={styles.cancelBtn}
                      disabled={ticketStatus === 'loading'}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className={styles.submitBtn}
                      disabled={ticketStatus === 'loading' || ticketStatus === 'success'}
                    >
                      {ticketStatus === 'loading' ? 'Sending...' : 'Forward Ticket'}
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions & Input Footer */}
          {!showTicketForm && (
            <div className={styles.footer}>
              {/* Quick Option Buttons */}
              <div className={styles.quickOptions}>
                <button onClick={() => setShowTicketForm(true)} className={styles.quickBtn}>
                  🎫 Open Support Ticket
                </button>
                <button
                  onClick={() => {
                    setMessages((prev) => [
                      ...prev,
                      { id: Math.random().toString(), sender: 'user', text: 'Uptime Check', timestamp: new Date() },
                    ]);
                    setIsTyping(true);
                    setTimeout(() => {
                      setIsTyping(false);
                      setMessages((prev) => [
                        ...prev,
                        {
                          id: Math.random().toString(),
                          sender: 'bot',
                          text: 'KOOLIXA Network operations are currently nominal. Average system uptime across our client websites stands at 99.99%. Custom rollbacks and backup replicates are monitored 24/7.',
                          timestamp: new Date(),
                        },
                      ]);
                    }, 800);
                  }}
                  className={styles.quickBtn}
                >
                  ⚡ Check Uptime Status
                </button>
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSend} className={styles.inputForm}>
                <input
                  type="text"
                  placeholder="Ask a systems question..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isTyping}
                  className={styles.chatInput}
                />
                <button type="submit" className={styles.sendBtn} disabled={isTyping}>
                  ➔
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
