"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo Section */}
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/logo.svg" alt="ProVital Logo" width={40} height={40} />
          </Link>
          <span>ProVital</span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className={styles.hamburger}
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className={styles.hamburgerIcon}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className={styles.hamburgerIcon}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop Navigation Links */}
        <nav
          className={`${styles.navLinks} ${
            isMobileMenuOpen ? styles.navLinksMobile : ""
          }`}
        >
          <Link href="#">List your practice</Link>
          <span className={styles.separator}>|</span>
          <Link href="#">For Employers</Link>
          <span className={styles.separator}>|</span>
          <Link href="#">Courses</Link>
          <span className={styles.separator}>|</span>
          <Link href="#">Books</Link>
          <span className={styles.separator}>|</span>
          <Link href="#">Speakers</Link>
          <span className={styles.separator}>|</span>
          <Link href="#">Doctors</Link>
          <span className={styles.separator}>|</span>

          {/* Dropdown Menu for Login / Signup */}
          <div
            className={styles.dropdown}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            <span className={styles.dropdownTrigger}>
              Login / Signup
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                className={styles.dropdownIcon}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            {isDropdownOpen && (
              <div className={styles.dropdownContent}>
                {/* Dropdown Content for Login / Signup */}
                <div className={styles.dropdownRow}>
                  <span>Doctor</span>
                  <div>
                    <Link href="#">Login</Link>
                    <span>|</span>
                    <Link href="#">Sign up</Link>
                  </div>
                </div>
                <hr />
                <div className={styles.dropdownRow}>
                  <span>Patients</span>
                  <div>
                    <Link href="#">Login</Link>
                    <span>|</span>
                    <Link href="#">Sign up</Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Sidebar for Mobile */}
        {isMobileMenuOpen && (
          <div className={styles.sidebar}>
            <div className={styles.dropdownContent}>
              <div className={styles.dropdownRow}>
                <span>Doctor</span>
                <div>
                  <Link href="#">Login</Link>
                  <span>|</span>
                  <Link href="#">Sign up</Link>
                </div>
              </div>
              <hr />
              <div className={styles.dropdownRow}>
                <span>Patients</span>
                <div>
                  <Link href="#">Login</Link>
                  <span>|</span>
                  <Link href="#">Sign up</Link>
                </div>
              </div>
            </div>

            <nav className={styles.navLinksMobile}>
              {/* Sidebar Links */}
              <Link href="#">
                Doctors
                <Image alt="" src="right-arrow.svg" className={styles.rightArrowIcon} width={30} height={25}/>
              </Link>
              <hr />
              <Link href="#">
                List your practice
                <Image alt="" src="right-arrow.svg" className={styles.rightArrowIcon} width={30} height={25}/>
              </Link>
              <hr />
              <Link href="#">
                For Employers
                <Image alt="" src="right-arrow.svg" className={styles.rightArrowIcon} width={30} height={25}/>
              </Link>
              <hr />
              <Link href="#">
                Courses
                <Image alt="" src="right-arrow.svg" className={styles.rightArrowIcon} width={30} height={25}/>
              </Link>
              <hr />
              <Link href="#">
                Books
                <Image alt="" src="right-arrow.svg" className={styles.rightArrowIcon} width={30} height={25}/>
              </Link>
              <hr />
              <Link href="#">
                Speakers
                <Image alt="" src="right-arrow.svg" className={styles.rightArrowIcon} width={30} height={25}/>
              </Link>
              <hr />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
