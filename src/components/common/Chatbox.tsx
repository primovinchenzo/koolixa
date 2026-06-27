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
        text: 'System online. I am the KOOLIXA Operations Assistant. How can I help you with IT support, cybersecurity logs, or backup stability today?',
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
    
    if (text.includes('uptime') || text.includes('status') || text.includes('online') || text.includes('down')) {
      return 'KOOLIXA Network operations are currently nominal. Average system uptime across our client base stands at 99.99%. Off-site rolling backups were validated at 03:15 UTC today.';
    }
    
    if (text.includes('sla') || text.includes('response') || text.includes('time') || text.includes('speed')) {
      return 'We guarantee an average first-touch ticket response SLA of under 14 minutes for all active IT support clients. Technical assessments are processed within 2 hours.';
    }

    if (text.includes('price') || text.includes('cost') || text.includes('quote') || text.includes('hire')) {
      return 'KOOLIXA structures custom monthly retainer SLAs based on active users and audit levels. You can use the "Open Ticket" option here to get a quick quote draft.';
    }

    if (text.includes('incident') || text.includes('attack') || text.includes('hack') || text.includes('alert')) {
      return 'If you are experiencing a cybersecurity incident, please click "Open Ticket" immediately. Our analysts will flag it to our 24/7 co-managed security desk for isolation.';
    }

    // Default trigger to suggest opening a ticket
    return 'For custom requests or immediate technical help, please click "Open Support Ticket" below. This flags our desk and forwards a ticket copy directly to vinnybusiness13@gmail.com.';
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
      setTicketError('Please enter a brief description of the issue.');
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
            text: `Ticket generated successfully. A confirmation has been forwarded to ${ticketEmail} and our operations desk at vinnybusiness13@gmail.com. Expected response is under 14 minutes.`,
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
        <div className={styles.chatWindow} role="dialog" aria-label="Tech Support AI Console">
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.botProfile}>
              <span className={styles.pulseDot}></span>
              <div>
                <h4>KOOLIXA AI Assistant</h4>
                <p>Uptime Operations Desk</p>
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
                <h5>Open Priority Support Ticket</h5>
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
                    placeholder="Briefly describe the issue..."
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
                          text: 'KOOLIXA Network operations are currently nominal. Average system uptime across our client base stands at 99.99%. Off-site rolling backups were validated at 03:15 UTC today.',
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
