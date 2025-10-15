// src/hooks/useConsents.js
import { useState, useEffect } from "react";
import * as api from "../api/mockApi";

export function useConsents() {
  const [consents, setConsents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.fetchConsents().then((res) => {
      setConsents(res);
      setLoading(false);
    });
  }, []);

  // ✅ Add a new consent dynamically
  const addConsent = (newConsent) => {
    setConsents((prev) => [...prev, newConsent]);
  };

  return { consents, loading, addConsent };
}
