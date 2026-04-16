'use client';
import { useEffect, useState } from 'react';

/**
 * Renders a clickable link whose href and label are decoded from base64 only
 * after the component mounts in the browser. Static HTML never contains the
 * real email / phone number, so crawlers that don't execute JS see nothing.
 *
 * Usage:
 *   <ObfuscatedLink encoded="bWFpbHRvOmZvb0BiYXIuY29t" label="Zm9vQGJhci5jb20=" className="..." />
 *
 * Both `encoded` (the full href, e.g. "mailto:…") and `label` (display text)
 * must be passed as btoa() strings.
 */
export function ObfuscatedLink({
    encoded,
    label,
    className,
}: {
    encoded: string;
    label: string;
    className?: string;
}) {
    const [href, setHref] = useState<string | null>(null);
    const [text, setText] = useState<string>('\u200b'); // zero-width space placeholder

    useEffect(() => {
        try {
            setHref(atob(encoded));
            setText(atob(label));
        } catch {
            // silently ignore decode errors
        }
    }, [encoded, label]);

    if (!href) {
        // Server-render and pre-hydration: render nothing meaningful
        return <span className={className} aria-hidden="true" />;
    }

    return (
        <a href={href} className={className}>
            {text}
        </a>
    );
}

/**
 * Renders plain (non-linked) text decoded from base64 on the client only.
 *
 * Usage:
 *   <ObfuscatedText encoded="S2llcml0c3RyYWF0IDI1" />
 */
export function ObfuscatedText({
    encoded,
    className,
}: {
    encoded: string;
    className?: string;
}) {
    const [text, setText] = useState<string>('');

    useEffect(() => {
        try {
            setText(atob(encoded));
        } catch {
            // silently ignore decode errors
        }
    }, [encoded]);

    return <span className={className}>{text}</span>;
}
