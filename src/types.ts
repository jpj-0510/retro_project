import React from 'react';

export type ViewState = 'HOME' | 'BLOG' | 'PORTFOLIO' | 'CONTACT' | 'NOT_FOUND';

export type Language = 'EN' | 'CN';

export interface BlogPost {
  id: string;
  title: string;
  titleCN: string;
  date: string;
  excerpt: string;
  excerptCN: string;
  readTime: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  descriptionCN: string;
  techStack: string[];
  imageUrl: string;
  link: string;
}

export interface NavItem {
  id: ViewState;
  label: string;
  icon?: React.ReactNode;
}